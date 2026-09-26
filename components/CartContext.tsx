"use client";
import {createContext,useContext,useState} from "react";
export interface CartItem{id:string;name:string;price:number;quantity:number}
type CartValue={items:CartItem[];open:boolean;setOpen:(v:boolean)=>void;add:(item:Omit<CartItem,"quantity">)=>void;remove:(id:string)=>void};
const CartContext=createContext<CartValue|null>(null);
export function CartProvider({children}:{children:React.ReactNode}){const[items,setItems]=useState<CartItem[]>([]);const[open,setOpen]=useState(false);const add=(item:Omit<CartItem,"quantity">)=>{setItems(old=>{const found=old.find(x=>x.id===item.id);return found?old.map(x=>x.id===item.id?{...x,quantity:x.quantity+1}:x):[...old,{...item,quantity:1}]});setOpen(true)};const remove=(id:string)=>setItems(old=>old.filter(x=>x.id!==id));return <CartContext.Provider value={{items,open,setOpen,add,remove}}>{children}</CartContext.Provider>}
export function useCart(){const value=useContext(CartContext);if(!value)throw new Error("useCart must be used inside CartProvider");return value}
