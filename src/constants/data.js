import images from './images';

const juice = [
  {
    title: 'Vodka Thyme Lemonade',
    price: '$56',
    tags: 'Rum | Citrus juice | Sugar'
  },
  {
    title: 'Jus gandaria & mango plum',
    price: '$59',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Wheatgrass',
    price: '$44',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Acai berry',
    price: '$31',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Pomegranate',
    price: '$26',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { juice, cocktails, awards };
