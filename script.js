// DOM元素
const buyButtons = document.querySelectorAll('.buy-btn');
const purchaseModal = document.getElementById('purchase-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const closeModalButtons = document.querySelectorAll('.close-modal');
const orderForm = document.getElementById('order-form');

// 產品資訊
let currentProduct = '';
let currentPrice = 0;

// 打開購買彈窗
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        currentProduct = this.getAttribute('data-product');
        currentPrice = this.getAttribute('data-price');
        
        // 設置彈窗內容
        document.getElementById('modal-product-name').textContent = currentProduct;
        document.getElementById('modal-product-price').textContent = currentPrice;
        
        // 顯示彈窗
        purchaseModal.style.display = 'block';
    });
});

// 關閉彈窗
closeModalButtons.forEach(button => {
    button.addEventListener('click', function() {
        purchaseModal.style.display = 'none';
        confirmationModal.style.display = 'none';
    });
});

// 點擊彈窗外部關閉彈窗
window.addEventListener('click', function(event) {
    if (event.target === purchaseModal) {
        purchaseModal.style.display = 'none';
    }
    if (event.target === confirmationModal) {
        confirmationModal.style.display = 'none';
    }
});

// 處理訂單表單提交
orderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // 獲取表單數據
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;
    const customerPhone = document.getElementById('customer-phone').value;
    const customerAddress = document.getElementById('customer-address').value;
    
    // 生成訂單編號
    const orderNumber = generateOrderNumber();
    
    // 設置確認彈窗內容
    document.getElementById('confirm-amount').textContent = currentPrice;
    document.getElementById('order-number').textContent = orderNumber;
    
    // 記錄訂單信息（在實際應用中，你需要將這些數據發送到服務器）
    const orderDetails = {
        orderNumber: orderNumber,
        customerName: customerName,
        customerEmail: customerEmail,
        customerPhone: customerPhone,
        customerAddress: customerAddress,
        product: currentProduct,
        price: currentPrice,
        orderDate: new Date().toISOString()
    };
    
    // 本地存儲訂單（示範用途）
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderDetails);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // 關閉購買彈窗，顯示確認彈窗
    purchaseModal.style.display = 'none';
    confirmationModal.style.display = 'block';
    
    // 重置表單
    orderForm.reset();
});

// 生成訂單編號
function generateOrderNumber() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    return `ORDER-${timestamp}-${random}`;
} 