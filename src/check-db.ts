import { db } from "./src/utils/database";

async function checkUser() {
  try {
    const user = await db.user.findFirst({
      where: {
        email: "test@example.com"
      }
    });
    console.log("Check result:", JSON.stringify(user, null, 2));
  } catch (error) {
    console.error("Check failed:", error);
  } finally {
    process.exit();
  }
}

checkUser();
