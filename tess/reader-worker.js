/* Docktally reader worker: serves the bundled reading model to the OCR engine, then loads the engine. */
const realFetch = self.fetch.bind(self);
self.fetch = async (u, o) => {
  if (/eng\.traineddata/.test(String(u))) {
    const res = await realFetch(new URL("eng-model.txt", self.location.href));
    if (!res.ok) return res;
    const bin = atob((await res.text()).trim()), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new Response(bytes, { status: 200 });
  }
  return realFetch(u, o);
};
importScripts("worker.min.js");
