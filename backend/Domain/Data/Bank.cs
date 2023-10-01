using System.ComponentModel.DataAnnotations;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Newtonsoft.Json;

namespace backend.Domain.Data;

public class Bank
{
    [Key]
    [JsonProperty("bank_id")]
    public int Id { get; set; }
    [JsonProperty("bank_name")]
    public string BankName { get; set; } = null!;
    [JsonProperty("contact_number")]
    public string ContactNumber { get; set; } = null!;
    [JsonProperty("email_address")]
    public string Email { get; set; } = null!;
    [JsonProperty("website")]
    public string Website { get; set; } = null!;
    [JsonProperty("bank_logo")]
    public string BankLogoUrl { get; set; } = null!;
}