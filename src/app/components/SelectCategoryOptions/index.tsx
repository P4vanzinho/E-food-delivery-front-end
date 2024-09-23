import useMocks from "@/mocks/mock";

export default function SelectCategoryOptions({}: { businessId: number }) {
  const { categories } = useMocks();
  return (
    <>
      {categories?.map((category, index) => (
        <option key={index} value={category.name}>
          {category.name}
        </option>
      ))}
    </>
  );
}
