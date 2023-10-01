using System.Net;
using System.Security;
using backend.Domain;
using backend.Domain.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
[Authorize]
public class BanksController : ControllerBase
{
    private readonly BanksDbContext _context;

    public BanksController(BanksDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetBanks()
    {
        var banks = await _context.Banks.ToListAsync();
        return Ok(new ApiOkResponse(banks));
    }

    [HttpPost]
    public async Task<IActionResult> AddBank(Bank bank)
    {
        try
        {
            if (ModelState.IsValid)
            {
                await _context.Banks.AddAsync(bank);
                await _context.SaveChangesAsync();
                return Ok(new ApiOkResponse(new
                {
                    id = bank.Id,
                    message = $"Bank with name = {bank.BankName} create successfully."
                }));
            }
            return BadRequest(new ApiBadResponse("Bank Model is not valid."));
        }
        catch (Exception ex)
        {
            return BadRequest(new ApiBadResponse(ex.Message));
        }
    }

    [HttpPut]
    public async Task<IActionResult> UpdateBank(Bank bank)
    {
        _context.Banks.Update(bank);
        await _context.SaveChangesAsync();
        return Ok(new ApiOkResponse("Bank Data Updated Successfully."));
    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int id)
    {
        var bank = await _context.Banks.FindAsync(id);
        if (bank is null)
        {
            return NotFound(new ApiBadResponse($"Bank with id {id} can not be found.")
            {
                StatusCode = (int)HttpStatusCode.NotFound
            });
        }
        _context.Banks.Remove(bank);
        await _context.SaveChangesAsync();
        return Ok(new ApiOkResponse("Bank Deleted Successfully."));
    }
}