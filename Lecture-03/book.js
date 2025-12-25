const book = {
    title : "1984",
    author : "George Orwell",
    isAvailable : true,

    checkOut: function(){
        this.isAvailable = false;
    },
    checkIn : function(){
        this.isAvailable = true;
    }
};

console.log(`Title: ${book.title}`);

// ลองเรียกใช้ฟังก์ชันยืมหนังสือ
// book.checkOut(); 

// แสดงสถานะล่าสุด
console.log(`Status: ${book.isAvailable ? "Available" : "Checked Out"}`);