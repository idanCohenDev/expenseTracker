export const Categories = [
  { name: "Housing", iconName: "home", color: "#7689F0", selected: false },
  { name: "Transportation", iconName: "car", color: "#FF7396", selected: false },
  { name: "Food", iconName: "fast-food", color: "#FFCC65", selected: false },
  { name: "Utilities", iconName: "construct", color: "#E780AE", selected: false },
  { name: "Insurance", iconName: "medkit", color: "#FD956D", selected: false },
  { name: "Savings", iconName: "md-bulb", color: "#1BD3B6", selected: false },
  { name: "Personal", iconName: "man", color: "#B86BE1", selected: false },
  { name: "Entertainment", iconName: "film", color: "#F44F4F", selected: false },
];

export const Months = [
  { name: "January", selected: false },
  { name: "Febuary", selected: false },
  { name: "March", selected: false },
  { name: "April", selected: false },
  { name: "May", selected: false },
  { name: "June", selected: false },
  { name: "July", selected: false },
  { name: "August", selected: false },
  { name: "September", selected: false },
  { name: "October", selected: false },
  { name: "November", selected: false },
  { name: "December", selected: false },
];

const getLast20Years = () => {
  const years = [];
  for (let i = 0; i < 20; i++) {
    years.push({ name: new Date().getFullYear() - i, selected: false });
  }
  return years;
};

export const Years = getLast20Years();
