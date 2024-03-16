import Ably from "ably/promises";
export default function () {
  return new Ably.Realtime.Promise(
    useRuntimeConfig().public.ablyKey,
  );
}
