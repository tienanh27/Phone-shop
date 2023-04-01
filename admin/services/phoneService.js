export class Services {
  getPhones = async () => {
    try {
      const res = await axios({
        url: 'https://6421e4b886992901b2be90ec.mockapi.io/Product',
        method: 'GET',
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  addPhone = async (phone) => {
    try {
      await axios({
        url: 'https://6421e4b886992901b2be90ec.mockapi.io/Product',
        method: 'POST',
        data: phone,
      });
    } catch (err) {
      console.log(err);
    }
  };

  deletePhone = async (id) => {
    try {
      await axios({
        url: `https://6421e4b886992901b2be90ec.mockapi.io/Product/${id}`,
        method: 'DELETE',
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPhoneById = async (id) => {
    try {
      const res = await axios({
        url: `https://6421e4b886992901b2be90ec.mockapi.io/Product/${id}`,
        method: 'GET',
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  updatePhone = async (phone) => {
    try {
      await axios({
        url: `https://6421e4b886992901b2be90ec.mockapi.io/Product/${phone.id}`,
        method: 'PUT',
        data: phone,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
