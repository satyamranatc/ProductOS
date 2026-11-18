import React,{useContext} from 'react';
import StoreContext from "../context/StoreContext"

export default function Category() {

  const {categories, setCategories} = useContext(StoreContext);

  function handleCategory(e)
  {
      e.preventDefault();
      let categoryData = {
        categoryTitle:e.target[0].value,
        categoryPoster:e.target[1].value,
      }
      setCategories([...categories,categoryData])
  }

  return (
    <div className="space-y-6">

      <div id="header" className="bg-surface border border-border rounded-xl px-6 py-4 shadow-xs">
        <h2 className="text-2xl font-bold text-text tracking-tight">Category</h2>
      </div>

      <div id="categoryForm" className="bg-surface border border-border rounded-xl p-6 shadow-xs">
          <form onSubmit={handleCategory} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          
            <div>
               <label className="block text-sm font-medium text-secondary">
                Category Title:
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-text outline-none transition focus:border-primary focus:bg-surface focus:ring-2 focus:ring-accent"
                  />
                </label>
            </div>

            <div>
               <label className="block text-sm font-medium text-secondary">
                Category Poster:
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-text outline-none transition focus:border-primary focus:bg-surface focus:ring-2 focus:ring-accent"
                  />
                </label>
            </div>

            <button className="h-[38px] px-5 rounded-lg bg-primary hover:bg-primary-hover text-surface text-sm font-semibold transition-colors cursor-pointer">
              Add new Category
            </button>


          </form>
      </div>


      <div id="categoryOutput" className="bg-surface border border-border rounded-xl shadow-xs overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-background border-b border-border text-xs uppercase tracking-wider text-secondary">
            <tr>
              <th className="px-6 py-3.5 font-semibold">Id</th>
              <th className="px-6 py-3.5 font-semibold">Title</th>
              <th className="px-6 py-3.5 font-semibold">Poster</th>
              <th className="px-6 py-3.5 font-semibold text-right">Controlls</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm text-text">
            {
              categories.map((category,id)=>(
                <tr className="hover:bg-background/60 transition-colors">
              <td className="px-6 py-4 font-medium text-secondary">{id+1}</td>
              <td className="px-6 py-4 font-semibold text-text">{category.categoryTitle}</td>
              <td className="px-6 py-4">
                <img
                  src={category.categoryPoster}
                  alt={category.categoryTitle}
                  className="h-12 w-20 object-cover rounded-lg border border-border"
                />
              </td>
              <td className="px-6 py-4 text-right space-x-2">
                <button className="px-3 py-1.5 rounded-lg bg-accent text-primary hover:bg-primary hover:text-surface text-xs font-semibold transition-colors cursor-pointer">
                  Upadte
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-danger/10 text-danger hover:bg-danger hover:text-surface text-xs font-semibold transition-colors cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>

    </div>
  );
}
