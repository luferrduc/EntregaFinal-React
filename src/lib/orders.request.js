import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const ordersRef = collection(db, 'orders')

export const createOrder = async (order) => {
    // if(!order) return null
    const orderDoc = await addDoc(ordersRef, order)

    const createdOrder = {...order, id: orderDoc.id}

    return createdOrder

}