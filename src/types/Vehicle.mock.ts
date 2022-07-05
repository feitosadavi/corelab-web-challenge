export const mockVehicles = () => ([{
  id: 1,
  name: 'Vehicles Name',
  description: 'Vehicles Description',
  plate: 'AAA1235',
  isFavorite: true,
  year: 2022,
  color: 'red',
  price: 1000000,
  createdAt: new Date()
}, {
  id: 2,
  name: 'Other Vehicles Name',
  description: 'Other Vehicles Description',
  plate: 'BBB5678',
  isFavorite: false,
  year: 2010,
  color: 'black',
  price: 2000000,
  createdAt: new Date()
}])