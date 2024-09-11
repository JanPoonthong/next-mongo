import connect from "@/lib/db";

export async function register() {
  console.log(`API Endpoint: ${process.env.NEXT_PUBLIC_BASE_PATH}`)
  console.log("Connecting to database...");
  await connect();
}
