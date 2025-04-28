import Head from 'next/head';
import styles from '../styles/Return.module.css'; // Correctly importing the CSS

export default function ReturnAndRefund() {
  return (
    <div>
      <Head>
        <title>ShopSmart - Return & Refund Policy</title>
        <meta name="description" content="Return and Refund Policy of ShopSmart, outlining the terms and process for returns and refunds." />
      </Head>

      <div className={styles.policyContent}>
        <h1>Return & Refund Policy</h1>
        <p>
          At ShopSmart, we strive to ensure that our customers are satisfied with their purchases. If you're not completely happy with your order, we have a simple return and refund process in place to help.
        </p>

        <h2>1. Returns</h2>
        <p>
          You can return products within 30 days of receiving your order, as long as the product is unused, undamaged, and in its original packaging.
        </p>

        <h2>2. How to Return an Item</h2>
        <p>
          To initiate a return, please contact our customer service at <a href="mailto:support@shopsmart.com">support@shopsmart.com</a> with your order number and the item(s) you wish to return. We will guide you through the return process.
        </p>

        <h2>3. Refunds</h2>
        <p>
          Once we receive your returned item and verify its condition, we will process your refund. Refunds will be issued to the original payment method used during the purchase. Depending on your bank or payment service provider, it may take 5-10 business days for the refund to appear in your account.
        </p>

        <h2>4. Non-returnable Items</h2>
        <p>Some items are non-returnable, including:</p>
        <ul>
          <li>Personalized or custom-made items</li>
          <li>Opened software or digital products</li>
          <li>Items marked as "Final Sale"</li>
        </ul>

        <h2>5. Exchange Policy</h2>
        <p>
          We currently do not offer direct exchanges. If you wish to exchange an item, you will need to return the original item for a refund and place a new order for the desired product.
        </p>

        <h2>6. Shipping Costs</h2>
        <p>
          If your return is due to a defect or error on our part, we will cover the return shipping costs. Otherwise, the return shipping costs will be your responsibility.
        </p>

        <h2>7. Damaged or Defective Products</h2>
        <p>
          If you receive a damaged or defective item, please contact us within 7 days of receiving the product. We will arrange for a return and send you a replacement or process a full refund.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Return & Refund Policy, please contact us at: <a href="mailto:support@shopsmart.com">support@shopsmart.com</a>.
        </p>
      </div>
    </div>
  );
}
