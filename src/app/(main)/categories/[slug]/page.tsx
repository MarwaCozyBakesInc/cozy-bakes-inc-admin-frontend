import { notFound } from "next/navigation";
import Categories from "@/components/main/categories";
import {
  bakeryCategoryDetails,
  getBakerySubCategoryBySlug,
} from "@/data/main/categories";

type CategoriesPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function CategoriesPage({ params }: CategoriesPageProps) {
  const { slug } = await params;

  if (slug === bakeryCategoryDetails.slug) {
    return <Categories />;
  }

  const selectedCategory = getBakerySubCategoryBySlug(slug);

  if (!selectedCategory) {
    notFound();
  }

  return <Categories activeSlug={slug} />;
}

export default CategoriesPage;
