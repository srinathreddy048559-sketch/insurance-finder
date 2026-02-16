import { NextResponse } from "next/server";
import { COMPANIES } from "@/app/data/companies";

export function GET(req: Request, { params }: { params: { id: string } }) {
  const company = COMPANIES.find((c) => c.id === params.id);

  // optional: track state from query
  // const { searchParams } = new URL(req.url);
  // const state = searchParams.get("state");

  if (!company) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.redirect(company.url);
}
