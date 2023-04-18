const ServiceName = {
  getAll: async () => {
    const response = await fetch('/api/items');
    const data = await response.json();
    return data;
  },

  create: async (item) => {
    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
  },

  update: async (id, item) => {
    const response = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    return data;
  },

  delete: async (id) => {
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  },
};

export default ServiceName;
