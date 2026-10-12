"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "./CartContext";

export function CartDrawer() {
  const { items, open, setOpen, remove } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  async function registerCustomer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        marketingConsent: form.get("marketingConsent") === "on",
      }),
    });
    setStatus(response.ok ? "done" : "error");
  }

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] bg-black/70" onMouseDown={() => setOpen(false)}>
      <aside onMouseDown={(event) => event.stopPropagation()} className="ml-auto flex h-full w-full max-w-md flex-col bg-[#191919] p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <h2 className="font-display text-2xl font-bold">{checkout ? "CUSTOMER INFO" : <>YOUR CART <span className="text-accent">({items.length})</span></>}</h2>
          <button onClick={() => setOpen(false)} aria-label="閉じる"><X /></button>
        </div>

        {checkout ? (
          <form onSubmit={registerCustomer} className="flex-1 space-y-5 overflow-auto py-6">
            <p className="text-sm leading-6 text-white/55">購入手続きに必要な顧客情報を入力してください。情報はSupabaseで安全に管理されます。</p>
            <Field name="name" label="お名前" autoComplete="name" required />
            <Field name="email" label="メールアドレス" type="email" autoComplete="email" required />
            <Field name="phone" label="電話番号" type="tel" autoComplete="tel" />
            <label className="flex gap-3 text-xs text-white/60"><input name="marketingConsent" type="checkbox" className="accent-accent" />新着プログラムや商品のお知らせを受け取る</label>
            {status === "error" && <p role="alert" className="text-sm text-accent">保存できませんでした。設定を確認して再度お試しください。</p>}
            {status === "done" ? (
              <div className="space-y-4 rounded-xl bg-emerald-500/10 p-5 text-center text-emerald-400">
                <CheckCircle2 className="mx-auto mb-2" />顧客情報を登録しました
                {items.some((item) => item.itemUrl) && (
                  <div className="space-y-2 pt-2">
                    <p className="text-xs text-white/55">決済はBASEの商品ページで行います。</p>
                    {items.filter((item) => item.itemUrl).map((item) => (
                      <a key={item.id} href={item.itemUrl} target="_blank" rel="noreferrer" className="block bg-white px-4 py-3 text-xs font-black text-ink">{item.name}をBASEで購入</a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button disabled={status === "saving"} className="flex w-full items-center justify-center gap-2 bg-accent py-4 font-black disabled:opacity-50">{status === "saving" ? "保存中…" : "顧客情報を登録"}<ArrowRight size={18} /></button>
            )}
            <button type="button" onClick={() => setCheckout(false)} className="w-full text-xs text-white/45">カートへ戻る</button>
          </form>
        ) : (
          <>
            <div className="flex-1 space-y-3 overflow-auto py-6">
              {items.length === 0 ? <div className="grid h-full place-content-center text-center text-white/50"><ShoppingBag className="mx-auto mb-4" size={42} /><p>カートは空です</p></div> : items.map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl bg-white/5 p-4"><div><b>{item.name}</b><p className="mt-1 text-sm text-white/50">¥{item.price.toLocaleString()} × {item.quantity}</p></div><button onClick={() => remove(item.id)} aria-label={`${item.name}を削除`} className="text-white/40 hover:text-accent"><Trash2 size={18} /></button></div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-5"><div className="mb-5 flex justify-between text-lg"><span>合計</span><b>¥{total.toLocaleString()}</b></div><button onClick={() => setCheckout(true)} disabled={!items.length} className="flex w-full items-center justify-center gap-2 bg-accent py-4 font-black disabled:opacity-30">購入手続きへ <ArrowRight size={18} /></button></div>
          </>
        )}
      </aside>
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...inputProps } = props;
  return <label className="block text-xs font-bold text-white/60">{label}<input {...inputProps} className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-base text-white outline-none focus:border-accent" /></label>;
}
