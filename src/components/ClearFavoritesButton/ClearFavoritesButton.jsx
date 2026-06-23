import { useFavorites } from "@/contexts/FavoritesContext";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ClearFavoritesButton = () => {
  const { removeAllFavorites } = useFavorites();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Clear Favorites</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-xl">Clear all favorites?</DialogTitle>
          <DialogDescription>This will permanently remove all items from your favorites list.</DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full">
          <DialogClose asChild>
            <Button variant="outline" className="h-9! min-h-9 flex-1 min-w-0">Cancel</Button>
          </DialogClose>
          <Button className="h-9! min-h-9 bg-red-500 text-white flex-1 min-w-0" onClick={removeAllFavorites}>Clear All</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ClearFavoritesButton;
