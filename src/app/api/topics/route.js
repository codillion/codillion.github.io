import ConnectMongo from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";
import { NextResponse } from "next/server";

export async function GET() {
  await ConnectMongo();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
