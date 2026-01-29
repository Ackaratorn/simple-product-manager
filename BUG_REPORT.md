# Bug Report

## Title
Cannot calculate total price correctly

## Description
ในช่วงแรกของการพัฒนาโปรแกรม ไม่สามารถคำนวณราคารวมของสินค้าได้
เนื่องจากยังไม่มีฟังก์ชันสำหรับคำนวณราคารวมในคลาส ProductManager

## Expected Result
ระบบสามารถคำนวณราคารวมของสินค้าทั้งหมดได้อย่างถูกต้อง

## Actual Result
ระบบแสดง error ว่าไม่พบฟังก์ชันที่ใช้คำนวณราคารวม

## Solution
เพิ่มฟังก์ชัน getTotalPrice() ในคลาส ProductManager
และปรับโครงสร้างโค้ดให้เหมาะสมกับการทดสอบ
