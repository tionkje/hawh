import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const webhookId = data.get('webhookId');
    console.log('SERVER', data.get('webhookId'));

    await fetch(`https://ha.bastiaandeknudt.be/api/webhook/${webhookId}`)
      // const res = await fetch(`http://homeassistant.local:8123/api/webhook/${webhookId}`)
      .then(res => {
        console.log('STATUS:', res.status, res.statusText);
        return res.text();
      })

    redirect(303, '/bedankt');
  }
};
