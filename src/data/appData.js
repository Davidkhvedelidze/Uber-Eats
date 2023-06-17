import * as ROUTES from "../constants/routes";

//Browse screen
export const BrowseList = [
  {
    id: 1,
    title: "Breakfast & Branch",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-10.png"),
  },
  {
    id: 2,
    title: "Coffe & Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-9.png"),
  },
  {
    id: 3,
    title: "Deals",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-8.png"),

    routeName: ROUTES.DEALS_SCREEN,
    type: 0,
  },
  {
    id: 4,
    title: "Restaurant Rewards",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-1.png"),
    routeName: ROUTES.DEALS_SCREEN,
    type: 1,
  },
  {
    id: 5,
    title: "Best Overall",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-2.png"),
  },
  {
    id: 6,
    title: "Shipped Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-3.png"),
  },
];

export const AllCategoriesList = [
  {
    id: 7,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-4.png"),
  },
  {
    id: 8,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-5.png"),
  },
  {
    id: 9,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-6.png"),
  },
  {
    id: 10,
    title: "Sandwich",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-7.png"),
  },
  {
    id: 11,
    title: "Best Overall",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-2.png"),
  },
  {
    id: 12,
    title: "Shipped Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-3.png"),
  },
  {
    id: 13,
    title: "Best Overall",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-2.png"),
  },
  {
    id: 14,
    title: "Shipped Tea",
    imgUrl: require("../components/pictures/BrowseImages/CategoryImage-3.png"),
  },
];

// deals screen
export const listToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    orders: "5",
    reward: "8",
    distance: 5.4,
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
    distance: 6.4,
    promotion: true,
    distance: 5.4,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
    distance: 1.4,
    promotion: true,
    distance: 5.4,
  },
  {
    id: 3,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "2.29",
    deliveryTime: "10-25",
    rating: 3.4,
    promotion: true,
    distance: 5.4,
  },
  {
    id: 4,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.39",
    deliveryTime: "15-25",
    rating: 4.1,
    distance: 5.4,
  },
  {
    id: 5,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.29",
    deliveryTime: "10-15",
    rating: 4.8,
    distance: 5.4,
  },
];
export const PickupListToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "pickup",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    orders: "5",
    reward: "8",
    distance: 1.4,
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "pickup ",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
    distance: 4.4,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "page",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
  },
];

// Grocery screen
export const groceryList = [
  {
    logo: require("../components/pictures/GroceryLogos/5elementLogo.png"),
    color: "#F60000",
    deliveryTime: 60,
    id: 1,
    title: "5 Element",
  },
  {
    logo: require("../components/pictures/GroceryLogos/CardenasLogo.png"),
    color: "#77A240",
    deliveryTime: 20,
    id: 2,
    title: "Cardenas",
  },
  {
    logo: require("../components/pictures/GroceryLogos/GroceryOutletLogo.png"),
    color: " #E4AE3C",
    deliveryTime: 10,
    id: 3,
    title: "Grocery Outlet",
  },
  {
    logo: require("../components/pictures/GroceryLogos/Group.png"),
    color: "#B71234",
    deliveryTime: 90,
    id: 4,
    title: "Andronico's",
  },
  {
    logo: require("../components/pictures/GroceryLogos/SafewayLogo.png"),
    color: "#AB0920",
    deliveryTime: 40,
    id: 5,
    title: "Safeway",
  },
  {
    logo: require("../components/pictures/GroceryLogos/smartLogo.png"),
    color: " #D2202F",
    deliveryTime: false,
    id: 6,
    title: "Smart&Final",
  },
];

export const locationDetails = [
  {
    id: 1,
    iconUrl: require("../components/pictures/DeliveryCardImages/locationIcon.png"),
    title: "San Francisco Bay Area",
    subtitle: "John's List",
  },
];

// Home screen
export const homeScreenlistToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    orders: "5",
    reward: "8",
    distance: 5.4,
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
    distance: 6.4,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "Delivery",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
    distance: 1.4,
  },
  {
    id: 3,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "2.29",
    deliveryTime: "10-25",
    rating: 3.4,
  },
  {
    id: 4,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.39",
    deliveryTime: "15-25",
    rating: 4.1,
  },
  {
    id: 5,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "0.29",
    deliveryTime: "10-15",
    rating: 4.8,
  },
];

export const PikckupListToRender = [
  {
    id: 0,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "pickup",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.7,
    promotion: true,
    orders: "5",
    reward: "8",
    distance: 1.4,
  },
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "pickup ",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
    distance: 4.4,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "page",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
  },
];
export const DineinListToRender = [
  {
    id: 1,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "5.249",
    deliveryTime: "5-25",
    rating: 4.1,
  },
  {
    id: 2,
    imgUrl: require("../Images/mainCardImg.png"),
    title: "random lastname",
    price: "6.50",
    deliveryTime: "10-25",
    rating: 4.9,
  },
];

export const CategoryListItems = [
  {
    id: 0,
    title: "Convenience",
    imgUrl: require("../components/pictures/CategoryImages/Convenience.png"),
  },
  {
    id: 1,

    title: "Alcohol",
    imgUrl: require("../components/pictures/CategoryImages/Alcohol.png"),
  },
  {
    id: 2,

    title: "Pet Supplies",
    imgUrl: require("../components/pictures/CategoryImages/PetSupplies.png"),
  },
  {
    id: 3,

    title: "Flowers",
    imgUrl: require("../components/pictures/CategoryImages/Flowers.png"),
  },
  {
    id: 4,

    title: "Grocery",
    imgUrl: require("../components/pictures/CategoryImages/Grocery.png"),
  },
  {
    id: 5,

    title: "American",
    imgUrl: require("../components/pictures/CategoryImages/American.png"),
  },
  {
    id: 6,

    title: "Speciality",
    imgUrl: require("../components/pictures/CategoryImages/Speciality.png"),
  },
  {
    id: 7,

    title: "Takeout",
    imgUrl: require("../components/pictures/CategoryImages/Takeout.png"),
  },
  {
    id: 8,

    title: "Asian",
    imgUrl: require("../components/pictures/CategoryImages/Asian.png"),
  },
  {
    id: 9,

    title: "Ice Cream",
    imgUrl: require("../components/pictures/CategoryImages/IceCream.png"),
  },
  {
    id: 10,

    title: "Halal",
    imgUrl: require("../components/pictures/CategoryImages/Halal.png"),
  },
  {
    id: 11,

    title: "Retails",
    imgUrl: require("../components/pictures/CategoryImages/Retails.png"),
  },
  {
    id: 12,

    title: "Carribean",
    imgUrl: require("../components/pictures/CategoryImages/Carribean.png"),
  },
  {
    id: 13,

    title: "Indian",
    imgUrl: require("../components/pictures/CategoryImages/Indian.png"),
  },
  {
    id: 14,

    title: "French",
    imgUrl: require("../components/pictures/CategoryImages/French.png"),
  },
  {
    id: 15,

    title: "Fast Foods",
    imgUrl: require("../components/pictures/CategoryImages/FastFoods.png"),
  },
  {
    id: 16,

    title: "Burger",
    imgUrl: require("../components/pictures/CategoryImages/Burger.png"),
  },
  {
    id: 17,

    title: "Ride",
    imgUrl: require("../components/pictures/CategoryImages/Ride.png"),
  },
  {
    id: 18,

    title: "Chinese",
    imgUrl: require("../components/pictures/CategoryImages/Chinese.png"),
  },
  {
    id: 19,

    title: "Dessert",
    imgUrl: require("../components/pictures/CategoryImages/Dessert.png"),
  },
];

// order details screen
export const souces = [
  {
    id: 0,
    label: "Mariana Souce",
    isChecked: false,
  },
  {
    id: 1,
    label: "Garlicky Sauce",
    isChecked: false,
  },
  {
    id: 2,
    label: "Pesto Sauce",
    isChecked: false,
  },
  {
    id: 3,
    label: "BBQ Sauce",
    isChecked: false,
  },
  {
    id: 4,
    label: "Buffalo Sauce",
    isChecked: false,
  },
];
export const size = [
  {
    id: 0,

    isChecked: false,
    label: `Small 10"(6 Slices)`,
    price: 2.0,
  },
  {
    id: 1,
    isChecked: false,

    label: `Medium 12"(8 Slices)`,
    price: 4.0,
  },
  {
    id: 2,
    isChecked: false,

    label: `Large 14"(8 Slices)`,
    price: 10,
  },
  {
    id: 3,
    isChecked: false,

    label: `Extra large 16"(12 Slices)`,
    price: 15,
  },
  {
    id: 4,
    isChecked: false,

    label: `Super 20"(12 Slices)`,
    price: 18,
  },
  {
    id: 5,
    isChecked: false,

    label: `24"`,
    price: 25,
  },
];
export const getSauce = [
  {
    id: 0,
    isChecked: false,
    label: `Sauce on the side`,
  },
];
export const Crust = [
  {
    id: 0,
    isChecked: false,
    label: `Regular Crust`,
  },
  {
    id: 1,
    isChecked: false,
    label: `Corn Skinny Crust`,
    price: 4,
  },
  {
    id: 2,
    isChecked: false,
    label: `Thick Pan Crust`,
    price: 10,
  },
];
export const addOns = [
  {
    id: 0,
    isChecked: false,
    label: `1 Side of Ranch Dressing`,
    price: 0.5,
  },
  {
    id: 1,
    isChecked: false,
    label: `2 Side of Ranch Dressing`,
    price: 1,
  },
  {
    id: 2,
    isChecked: false,
    label: `Side of Mariana Sauce`,
    price: 0.69,
  },
];
export const frequently = [
  {
    id: 0,
    isChecked: false,
    label: `Soda`,
    price: 0.5,
  },
  {
    id: 1,
    isChecked: false,
    label: `Cheeze Pizza`,
    price: 1,
  },
  {
    id: 2,
    isChecked: false,
    label: `Amigos Hawaina Pizza`,
    price: 0.69,
  },
];

// restaurant details

export const detailsData = {
  restaurant: {
    name: "Lanespan Pizza & Pub (Emeryville)",
    category: "pizza",
    rating: "4.3",
    ratingQuantity: 300,
    workingHours: "Open until 3:00 AM",
  },
  mostPopular: [
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic,ive oil base, mozarella, cremini mushrooms, ricotta, thyme, hite truffle oil. Add arugula for an extra charge",
      imgUrl: require("../components/pictures/PizzaImage.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, ite truffle oil. Add arugula for an extra charge",
      imgUrl: require("../components/pictures/PizzaImage.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, wite truffle oil. Add arugula for an extra charge",
      imgUrl: require("../components/pictures/PizzaImage.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, wite truffle oil. Add arugula for an extra charge",
    },
  ],
  pickedForYou: [
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic,ive oil base, mozarella, cremini mushrooms, ricotta, thyme, hite truffle oil. Add arugula for an extra charge",
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, ite truffle oil. Add arugula for an extra charge",
    },
    {
      title: "McMushroom Pizza",
      price: "US$21.00",
      desc: "Garlic, live oil base, mozarella, cremini mushrooms, ricotta, thyme, wite truffle oil. Add arugula for an extra charge",
    },
  ],
};

// safeway screen
export const fruitsVegetables = [
  {
    title: "Organic Banana",
    price: "0.27",
    subtitle: "1 banana",
    imgUrl: require("../components/pictures/FeaturedCardPics/Rectangle1.png"),
    id: 1,
  },
  {
    title: "Medium Hass Avocado",
    price: "2.21",
    subtitle: "1 avocado",
    imgUrl: require("../components/pictures/FeaturedCardPics/Rectangle2.png"),
    id: 2,
  },
  {
    title: "Large Tomatoes    Hot House",
    price: "1.04",
    subtitle: "1 Tomato",
    imgUrl: require("../components/pictures/FeaturedCardPics/Rectangle3.png"),
    id: 3,
  },
];
export const beverages = [
  {
    title: "Coca-Cola Zero  Sugar Cola soda",
    price: "6.27",
    subtitle: "12 x 12 fl oz",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages1.png"),
    id: 1,
  },
  {
    title: "Simply Pulp Free Orange Juice",
    price: "4.45",
    subtitle: "5 fl oz",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages2.png"),
    id: 2,
  },
  {
    title: "Signature Select Refreshed Purified Drinki...",
    price: "15.27",
    subtitle: "52 fl oz",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages3.png"),
    id: 3,
  },
];
export const categories = [
  {
    title: "Fruits & Vegetables",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages1.png"),
    id: 1,
  },
  {
    title: "Beverages",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages2.png"),
    id: 2,
  },
  {
    title: "Frozen Food",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages3.png"),
    id: 3,
  },
  {
    title: "Pantry & Groceries",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages1.png"),
    id: 4,
  },
  {
    title: "Snaks",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages2.png"),
    id: 5,
  },
  {
    title: "Meat, Seafood & Plant-Bas...",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages3.png"),
    id: 6,
  },
  {
    title: "Cheese",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages1.png"),
    id: 7,
  },
  {
    title: "Bread",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages2.png"),
    id: 8,
  },
  {
    title: "Milk",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages3.png"),
    id: 9,
  },
  {
    title: "Canned Products",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages1.png"),
    id: 10,
  },
  {
    title: "Home",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages2.png"),
    id: 11,
  },
  {
    title: "Breakfast",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages3.png"),
    id: 12,
  },
  {
    title: "Sweets & Chocolates",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages1.png"),
    id: 13,
  },
  {
    title: "Yogurt",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages2.png"),
    id: 14,
  },
  {
    title: "Prepared Foods",
    imgUrl: require("../components/pictures/FeaturedCardPics/beverages3.png"),
    id: 15,
  },
];

//settings screen

export const DetailsInfo = [
  {
    iconUrl: require("../components/pictures/SettingsIcons/Order.png"),
    title: "Orders",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/YourFav.png"),
    title: "Your Favorites",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Restaurant-Rewards.png"),
    title: "Restaurant Rewards",
    value: ROUTES.DEALS_SCREEN,
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Wallet.png"),
    title: "Wallet",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/GiftIcon.png"),
    title: "Send a gift",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Help.png"),
    title: "Help",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Promotions.png"),
    title: "Promotions",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Uber-Pass.png"),
    title: "Uber Pass ",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Deliver.png"),
    title: "Deliver with Uber",
  },
  {
    iconUrl: require("../components/pictures/SettingsIcons/Settings.png"),
    title: "Settings",
    value: ROUTES.SETTINGS_DETAILS,
  },
];

// shop screen
const ShopImg = require("../components/pictures/RectangleShop.png");

export const fakeData = [
  {
    ImgUrl: { ShopImg },
    title: "Begs & Megs",
    subtitle: "1 item US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    onPress: () => console.log("hello"),
    id: 1,
  },
  {
    ImgUrl: { ShopImg },
    title: "Begs & Megs",
    subtitle: "1 item US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    onPress: () => console.log("hello"),
    id: 2,
  },
  {
    ImgUrl: { ShopImg },
    title: "Begs & Megs",
    subtitle: "1 item US$43.00",
    desc: "Deliver to San Franciscao Bay Area",
    onPress: () => console.log("hello"),
    id: 3,
  },
];
