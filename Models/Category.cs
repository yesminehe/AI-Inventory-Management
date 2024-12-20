namespace InventoryManagementAPI.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public List<InventoryItem> InventoryItems { get; set; }  // One-to-many relationship
    }
}
