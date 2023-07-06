import CartManager from "./MongoDbManagers/cart.dao.js";
import ProductManager from "./MongoDbManagers/product.dao.js";
import TicketManager from "./MongoDbManagers/ticket.dao.js";
import UserManager from "./MongoDbManagers/user.dao.js";
import MessageManager from "./MongoDbManagers/message.dao.js";

const PRODUCT_DAO = new ProductManager();
const USER_DAO = new UserManager();
const CART_DAO = new CartManager();
const TICKET_DAO = new TicketManager();
const MESSAGE_DAO = new MessageManager();

export { PRODUCT_DAO, USER_DAO, CART_DAO, TICKET_DAO, MESSAGE_DAO };
