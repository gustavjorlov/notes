export default function handler(req, res, context) {
  console.log("The list", context);
  res.status(200).json({ name: "John Doe" });
}
