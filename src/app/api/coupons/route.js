import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, couponCode, expireDate } = await request.json();
    const newCoupon = { title, couponCode, expireDate };
    console.log(newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
