using System.ComponentModel.DataAnnotations.Schema;

namespace JobScoutApi.Models.Entities
{
  [Table("Clients")]
  public class Client
  {
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public required string Type { get; set; }
  }
}