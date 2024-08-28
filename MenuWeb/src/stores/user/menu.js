import { defineStore } from 'pinia'

export const useUserMenuStore = defineStore('user-menu',{
    state:()=>({
        menuType:[
            {
                mainType:'อาหารจานหลัก',
                supType:['เมนูข้าว','เมนูกับข้าว', 'เมนูข้าวหน้า', 'เมนูเส้น']
            },
            {
                mainType:'อาหารทานเล่น',
                supType:['ของทอด', 'ของหวาน', 'ขนมขบเคี้ยว']
            },
            {
                mainType:'เครื่องดื่ม',
                supType:['น้ำดื่ม', 'น้ำอัดลม', 'กาแฟ', 'น้ำชา', 'เครื่องดื่มแอลกอฮอล์']
            },
        ],
        selectedType:''
    }), 
    actions:{

    }
})