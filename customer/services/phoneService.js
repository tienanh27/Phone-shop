export class Service {
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
}
