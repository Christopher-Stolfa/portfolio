import { IContactFormData } from './types';

export async function submitForm(form: IContactFormData): Promise<{ success: boolean }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      return { success: true };
    } else {
      alert('Failed to send message. Please try again.');
      return { success: false };
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
    return { success: false };
  }
}
