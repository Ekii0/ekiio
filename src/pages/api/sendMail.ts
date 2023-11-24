import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}:${process.env.NEXT_PUBLIC_BACKEND_PORT}/sendmail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    if (response.status === 200) {
      return res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } else {
      return res
        .status(500)
        .json({ success: false, message: "Email not sent" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Email not sent" });
  }
}
