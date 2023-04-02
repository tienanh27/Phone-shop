
// const productSer = new ProductServive();

// function showTable(arrayData) {
//     var content = "";

//     arrayData.forEach(function (product, index) {
//       content += `
//         <tr>
//           <td></td>
//           <td>${product.name}</td>
//           <td>${product.price.toLocaleString()}</td>
//           <td>${product.screen}</td>
//           <td>${product.backCamera}</td>
//           <td>${product.frontCamera}</td>
//           <td><img src="${product.img}" style="width:100%" ></td>
//           <td>${product.desc}</td>
//           <td>${product.type}</td>
//           <td>
//             <button onclick="deleteProduct('${product.id}')" class="btn btn-danger" >Xóa</button>
//             <button data-toggle="modal" data-target="#myModal" onclick="showProductDetail('${product.id}')" class="btn btn-info" >Xem</button>
//           </td>
//         </tr>
//       `;
//     });

//     // đem các hàng trên lên giao diện 
//     document.querySelector("#tblDanhSachSP").innerHTML = content;
//   }


// //hiển thị danh sách khi thành công
// function showProductList() {

//     // Gọi kết quả để hiển thị 
//     var axiosResult = productSer.getProductList();

//     axiosResult.then(function (result) {
//         console.log(result.data);

//         //? các xử lý sau khi có data
//         showTable(result.data)

//     })
//         .catch(function (error) {
//             console.log(error)
//         });

// }

// //lấy danh sách khi load web
// showProductList();

// function addProduct() {

//     var name = document.querySelector("#namePro").value;
//     var price = Number(document.querySelector("#pricePro").value);
//     var screen = document.querySelector("#screenPro").value;
//     var backCamera = document.querySelector("#backCamPro").value;
//     var frontCamera = document.querySelector("#frontCamPro").value;
//     var img = document.querySelector("#imgPro").value
//     var desc = document.querySelector("#descPro").value
//     var type = document.querySelector("#typePro").value;

//     //2. Tạo đối tượng sản phẩm
//     var product = new Product(name, Number(price), screen, backCamera, frontCamera, img, desc, type);

//     //3. truyền xuống Backend
//     productSer.addProductSer(product)
//         .then(function (result) {
//             console.log(result);
//             //hiển thị lại danh sách
//             showProductList();
//             alert("Thêm thông tin thành công");

//         })
//         .catch(function (error) {
//             console.log(error)
//         })

//     //4. Nếu thành công, hiển thị lại danh sách sản phẩm
// }

// document.querySelector("#btnAdd").onclick = function () {
//     //thêm button cho form
//     document.querySelector("#myModal .modal-footer").innerHTML = `
//         <button class="btn btn-success" onclick="addProduct()" >Add Product</button>
//     `;

//     //reset form sau khi submit
//     document.querySelector("#formProduct").reset();
// }


// function deleteProduct(id) {
//     console.log(id);
//     productSer.deleteProductSer(id)
//         .then(function (result) {
//             console.log(result);

//             //hiển thị lại danh sách
//             showProductList();
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }

// function showProductDetail(id) {
//     console.log(id);

//     productSer.getProductItem(id)
//         .then(function (result) {
//             console.log(result.data);

//             //hiển thị lên form
//             document.querySelector("#namePro").value = result.data.name;
//             document.querySelector("#pricePro").value = result.data.price;
//             document.querySelector("#screenPro").value = result.data.screen;
//             document.querySelector("#backCamPro").value = result.data.backCamera;
//             document.querySelector("#frontCamPro").value = result.data.frontCamera;
//             document.querySelector("#imgPro").value = result.data.img;
//             document.querySelector("#descPro").value = result.data.desc;
//             document.querySelector("#typePro").value = result.data.type;

//             document.querySelector("#myModal .modal-footer").innerHTML = `
//             <button class="btn btn-success" onclick="updateProduct('${result.data.id}')" >Update Product</button>
//             `
//         })
//         .catch(function (error) {
//             console.log(error)
//         })


// }

// function updateProduct(id) {
//     console.log(id);

//     var name = document.querySelector("#namePro").value;
//     var price = Number(document.querySelector("#pricePro").value);
//     var screen = document.querySelector("#screenPro").value;
//     var backCamera = document.querySelector("#backCamPro").value;
//     var frontCamera = document.querySelector("#frontCamPro").value;
//     var img = document.querySelector("#imgPro").value;
//     var desc = document.querySelector("#descPro").value;
//     var type = document.querySelector("#typePro").value;

//     if (isValid) {
//         var productUpdate = new Product(name, Number(price), screen, backCamera, frontCamera, img, desc, type);
//         console.log(productUpdate);

//         productSer.updateProductSer(productUpdate, id)
//             .then(function (result) {
//                 console.log(result.data);

//                 showProductList();
//                 alert("Cập nhật thành công");
//                 document.querySelector("#myModal .close").click();

//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }
// }


// //Search products by name
// function searchByName() {
//     var axiosResult = productSer.getProductList();

//     axiosResult.then(function (result) {
//         var products = result.data;
//         var searchBox = document.getElementById('search-box');

//         searchBox.addEventListener('input', function () {
//             var searchValue = this.value.trim().toLowerCase();
//             var filteredProducts = products.filter(function (product) {
//                 return product.name.toLowerCase().includes(searchValue);
//             });

//             showTable(filteredProducts);
//         });
//     })
//         .catch(function (error) {
//             console.log(error);
//         });
// }

// // //Sort products by Price
// function sortByPrice() {
//     var axiosResult = productSer.getProductList();

//     axiosResult.then(function (result) {
//         var products = result.data;
//         var sortIcons = document.querySelectorAll('.sort-icon');

//         sortIcons.forEach(function (icon) {
//             icon.addEventListener('click', function () {
//                 var selectedValue = this.getAttribute('data-value');

//                 if (selectedValue === 'asc') {
//                     products.sort(function (a, b) {
//                         return a.price - b.price;
//                     });
//                 } else if (selectedValue === 'desc') {
//                     products.sort(function (a, b) {
//                         return b.price - a.price;
//                     });
//                 }

//                 showTable(products);
//             });
//         });
//     })
//         .catch(function (error) {
//             console.log(error);
//         });
// //
const getEle = (id) => document.getElementById(id);
const resetForm = (formId) => getEle(formId).reset();

// Importing necessary modules and classes
import { CustomModal, Helper } from './custom.js';
import { Services } from '../services/phoneService.js';
import { Validate } from './validate.js';
import { Phone } from '../model/phone.js';

const helper = new Helper();
const service = new Services();
const validate = new Validate();

const renderList = async () => {
  const phoneList = await service.getPhones();
  let content = '';
  phoneList.forEach((ele) => {
    content += ` <tr>
    <td>${ele.id}</td>
    <td><strong>${ele.name}</strong></td>
    <td>$${ele.price}</td>
    <td style="text-align: center"><img src=${ele.img} alt="phone-img" width="150" height="150"></td>
    <td>${ele.desc}</td>
    <td>${ele.type}</td>
    <td class = ''style="text-align: center"><button class="btn my-3 me-1" data-bs-toggle="modal"
    data-bs-target="#exampleModal" onclick ="btnEdit('${ele.id}')"  id='btnEdit'>
    Edit<i class="fa fa-pencil-square ms-2"></i>
    </button><button class="btn " onclick ="btnDelete('${ele.id}')" id='btnDelete'>
    Delete <i class="fa fa-trash ms-2"></i>
    </button></td>
    </tr>`;
  });
  getEle('tablePhone').innerHTML = content;
};

window.onload = async () => renderList();

getEle('addPhoneForm').onclick = () => {
  helper.clearTB();
  getEle('btnUpdate').style.display = 'none';
  getEle('btnAddPhone').style.display = 'inline-block';
};

getEle('btnAddPhone').onclick = async () => {
  const phoneList = await service.getPhones();
  if (!validate.isValid(phoneList)) return;

  const inputs = helper.getInputValue();
  let phone = new Phone('', ...inputs);
  await service.addPhone(phone);
  renderList();
  resetForm('formPhone');
  CustomModal.alertSuccess('Add phone successfully');
};

window.btnDelete = async (id) => {
  let res = await CustomModal.alertDelete(
    `This phone will be deleted, you can't undo this action`
  );
  if (res.isConfirmed) {
    await service.deletePhone(id);
    renderList();
    CustomModal.alertSuccess(`Delete phone successfully`);
  }
};

// Edit form 
window.btnEdit = async (id) => {
  helper.clearTB();
  getEle('btnUpdate').style.display = 'inline-block';
  getEle('btnAddPhone').style.display = 'none';

  let data = await service.getPhoneById(id);
  let arrObjValue = Object.keys(data).map((k) => data[k]);

  // Bỏ id ở đầu form 
  arrObjValue.shift();

  // fill the form with values
  helper.fill(arrObjValue);

  getEle('btnUpdate').onclick = async () => {
    const phoneList = await service.getPhones();
    if (!validate.isValid(phoneList, true)) return;

    const inputs = helper.getInputValue();
    let phone = new Phone(id, ...inputs);
    await service.updatePhone(phone);
    renderList();
    CustomModal.alertSuccess('Update phone successfully');
  };
};

// Thêm sự kiện cho nút tìm kiếm
$('#searchBtn').on('click', function (e) {
  e.preventDefault();
  var searchText = $('#searchInput').val().toLowerCase();

  // Lọc danh sách sản phẩm theo tên
  $('#myTable tbody tr').filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(searchText) > -1);
  });
});

// Define the sortData function in the global scope
function sortData() {
  fetch('https://6421e4b886992901b2be90ec.mockapi.io/Product')
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => a.price - b.price);
      // Replace the console.log with your desired function to display the sorted data
      console.log(data);
    })
    .catch(error => console.error(error));
}

// Get the button element by its id
const sortButton = document.getElementById('sort-button');

// Add an event listener to the button element
sortButton.addEventListener('click', sortData);