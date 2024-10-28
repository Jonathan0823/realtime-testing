"use server"

import { pusherServer } from "./pusher";

export const sendMessage = async (text: string) => {
  pusherServer.trigger("chat", "message", { text });
}