import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, code, password, email, phone, presentAddress, nid, DOB } =
      await request.json();
    const newStaffs = {
      name,
      code,
      password,
      email,
      phone,
      presentAddress,
      nid,
      DOB,
    };
    console.log(newStaffs);
    return NextResponse.json(newStaffs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Staff",
        error,
      },
      { status: 500 }
    );
  }
}
