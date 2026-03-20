import React, { useEffect, useState } from "react";
import "./orders.css";
import Layout from "../../components/layout/Layout";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import useAuth from "../../hooks/useAuth";

function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.uid) return;
    const ordersFirestoreRef = collection(db, "users", user.uid, "orders");
    const sortedOrders = query(
      ordersFirestoreRef,
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(sortedOrders, (snapshot) => {
      const ordersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <Layout>
      <div className="orders__page">
        {/* ── Page Title ── */}
        <div className="orders__page__heading">
          <h1 className="orders__page__title">Your Orders</h1>
          {!loading && orders.length > 0 && (
            <span className="orders__page__count">
              {orders.length} {orders.length === 1 ? "order" : "orders"}
            </span>
          )}
        </div>

        {/* ── Loading ── */}
        {loading && (
          <div className="order__message">
            <span className="order__message__spinner" />
            Loading your orders…
          </div>
        )}

        {/* ── Empty ── */}
        {!loading && orders.length === 0 && (
          <div className="order__message order__message--empty">
            <p className="order__message__title">No orders yet</p>
            <p className="order__message__sub">
              Looks like you haven't placed any orders.
            </p>
          </div>
        )}

        {/* ── Order Cards ── */}
        {!loading &&
          orders.map((order) => {
            const createdAt = order.createdAt?.toDate() || new Date();

            return (
              <div className="order__card" key={order.id}>
                {/* Header */}
                <div className="order__header">
                  <div className="order__header__left">
                    {/* <p className="order__id">
                      <span className="order__id__label">Order ID</span>
                      {order.id}
                    </p> */}
                    <p className="order__date">
                      {createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      &nbsp;·&nbsp;
                      {createdAt.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <span
                    className={`order__status order__status--${order.status?.toLowerCase() || "delivered"}`}
                  >
                    {order.status || "Delivered"}
                  </span>
                </div>

                {/* Items */}
                <div className="order__items">
                  {order.items?.map((item) => (
                    <div className="order__item" key={item.id}>
                      <div className="order__item__img__wrap">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="order__item__info">
                        <p className="order__item__title">{item.title}</p>
                        <div className="order__item__meta">
                          <span className="order__item__price">
                            ${item.price}
                          </span>
                          <span className="order__item__qty">
                            Qty: {item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}

export default Orders;
