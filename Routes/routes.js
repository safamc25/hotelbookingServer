const express=require('express')
const { register, login, getAllUsers, getUsersCount, getProfile } = require('../Controller/userController')
const { addHotel, getHotel, getAllHotel, removeHotel, updateHotel, getHotelCount } = require('../Controller/hotelController')
const { addRooms, getAllRoom, getRoom, removeRoom, updateRoom, getRoomCount } = require('../Controller/roomController')
const { addBooking, getAllBooking, getBooking, removeBooking, updateBooking, getBookingCount } = require('../Controller/bookingController')
const { middlewareFunction } = require('../middlewares/jwtMiddlewares')


// route


const router=new express.Router()


router.post('/add-new-user',register)

router.post('/login',login)

router.post('/admin/add-hotel',addHotel)

router.get('/admin/get-all-hotel',getAllHotel)

router.get('/admin/get-hotel/:_id',getHotel)

router.delete('/admin/delete-hotel/:_id',removeHotel)

router.put('/admin/update-hotel/:_id',updateHotel)

router.post('/admin/add-room',addRooms)

router.get('/admin/get-all-room',getAllRoom)

router.get('/admin/get-room/:_id',getRoom)

router.delete('/admin/delete-room/:_id',removeRoom)

router.put('/admin/update-room/:_id',updateRoom)


router.post('/user/add-booking',middlewareFunction,addBooking)

router.get('/user/get-all-booking',getAllBooking)

router.get('/user/get-booking/:_id',middlewareFunction,getBooking)

router.delete('/user/delete-booking/:_id',middlewareFunction,removeBooking)

router.put('/user/update-booking/:_id',middlewareFunction,updateBooking)

router.get('/users/get-all-users',getAllUsers)

router.get('/get-hotelcount',getHotelCount)

router.get('/get-roomcount',getRoomCount)

router.get('/get-usercount',getUsersCount)

router.get('/get-bookingcount',getBookingCount)

router.get('/get-profile/:_id',getProfile)






module.exports=router