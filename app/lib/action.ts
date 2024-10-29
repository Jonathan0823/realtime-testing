"use server"

import { pusherServer } from "./pusher";

export const sendMessage = async (text: string) => {
  await pusherServer.trigger("chat", "message", { text });
}