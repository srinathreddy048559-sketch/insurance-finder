import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

function safeFileName(input: string) {
  // keep only safe filename chars
  return input.replace(/[^a-z0-9-_]/gi, "_");
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const state = searchParams.get("state") || "N_A";
    const age = searchParams.get("age") || "N/A";
    const ownership = searchParams.get("ownership") || "N/A";
    const history = searchParams.get("history") || "N/A";
    const goal = searchParams.get("goal") || "N/A";

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 750]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    let y = 700;
    const drawText = (text: string, size = 14, color = rgb(0, 0, 0)) => {
      page.drawText(text, { x: 50, y, size, font, color });
      y -= 26;
    };

    drawText("Insurance Finder — Your Plan", 22);
    y -= 6;
    drawText(
      "Informational tool only. Not an insurance provider. No guaranteed pricing.",
      11,
      rgb(0.25, 0.3, 0.4)
    );
    y -= 20;

    drawText("Summary", 16);
    y -= 8;
    drawText(`State: ${state}`);
    drawText(`Age band: ${age}`);
    drawText(`Ownership: ${ownership}`);
    drawText(`Driving history: ${history}`);
    drawText(`Goal: ${goal}`);

    y -= 18;
    drawText("Recommended Next Steps", 16);
    y -= 8;
    drawText("• Compare at least 3 quotes (same deductibles & limits).");
    drawText("• Ask about discounts: bundling / telematics / good student.");
    drawText("• Higher liability can protect your savings in a crash.");
    drawText("• If financed/leased: you usually need comp + collision.");

    y -= 24;
    drawText(
      "Built to help you choose with confidence.",
      11,
      rgb(0.25, 0.3, 0.4)
    );

    const pdfBytes = await pdfDoc.save();
    const bytes = new Uint8Array(pdfBytes);

    const safeState = safeFileName(state);

    return new Response(bytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="insurance-plan-${safeState}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        error: "PDF generation failed",
        message: error?.message || "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
