import { ref } from "vue";
import supabase from "@/lib/supabase";

const posts = ref([]);
const categories = ref([]);

const loading = ref(false);
const error = ref(null);

export function usePosts() {
  const getPosts = async () => {
    loading.value = true;
    error.value = null;

    const { data, error: err } = await supabase
      .from("posts")
      .select(
        `
        *,
        categories(name),
        profiles(full_name)
      `,
      )
      .eq("status", "published")
      .order("created_at", { ascending: false });

    if (err) {
      error.value = err.message;
    } else {
      posts.value = data;
    }

    loading.value = false;
  };

  const getCategories = async () => {
    const { data, error: err } = await supabase
      .from("categories")
      .select(
        `
        *,
        posts(count)
      `,
      )
      .order("name");

    if (err) {
      console.log(err);
    } else {
      categories.value = data;
    }
  };

  return {
    posts,
    categories,
    loading,
    error,
    getPosts,
    getCategories,
  };
}
