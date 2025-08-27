export async function onRequestPost({ request }) {
  try {
    const data = await request.json();
    if (!data || !data.email) return new Response(JSON.stringify({ ok:false, error:'missing email' }), { status: 400 });
    return new Response(JSON.stringify({ ok:true, received: data }), { headers: { 'content-type':'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ ok:false, error:String(e) }), { status: 500 });
  }
}