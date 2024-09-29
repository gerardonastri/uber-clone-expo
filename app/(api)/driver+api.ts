/* eslint-disable prettier/prettier */

import { neon } from "@neondatabase/serverless";

export async function GET() {
  try {
    const sql = neon(
      "postgresql://uber-clone_owner:NGyY19QIqwnV@ep-muddy-block-a2ng8nyc.eu-central-1.aws.neon.tech/uber-clone?sslmode=require"
    );

    const response = await sql`SELECT * FROM drivers`;

    return Response.json({ data: response });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error });
  }
}
