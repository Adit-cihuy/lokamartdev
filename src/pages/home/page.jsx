import Card from "../../components/fragments/Card";

export default function Home() {
  const dummyData = [
    {
      image: "https://dmuvf4m79e02w.cloudfront.net/files/ICON-Logo-Black.jpg",
      title: "Piring",
      price: 96000,
      rating: 5,
    },
    {
      image: "https://dmuvf4m79e02w.cloudfront.net/files/ICON-Logo-Black.jpg",
      title: "Gelas",
      price: 48000,
      rating: 4,
    },
    {
      image: "https://dmuvf4m79e02w.cloudfront.net/files/ICON-Logo-Black.jpg",
      title: "Sendok",
      price: 24000,
      rating: 3,
    },
    {
      image: "https://dmuvf4m79e02w.cloudfront.net/files/ICON-Logo-Black.jpg",
      title: "Garpu",
      price: 28000,
      rating: 4,
    },
    {
      image: "https://dmuvf4m79e02w.cloudfront.net/files/ICON-Logo-Black.jpg",
      title: "Mangkok",
      price: 55000,
      rating: 5,
    },
  ];
  return (
    <div>
      Home
      <div className="flex flex-row items-center justify-center space-x-4">
        {dummyData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
