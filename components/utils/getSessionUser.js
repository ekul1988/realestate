import { getServerSession } from "next-auth/next";
import { authOptions } from "@/components/utils/authOptions";

export const getSessionUser = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return null;
    }

    return {
      user: session.user,
      userId: session.user.id, // corrected line
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};