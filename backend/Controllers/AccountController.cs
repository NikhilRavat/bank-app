using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class AccountController : ControllerBase
{
    private readonly IAuthService _authService;

    public AccountController(IAuthService AuthService)
    {
        _authService = AuthService;
    }

    [HttpPost]
    public async Task<IActionResult> SignUp(RegistrationModel model)
    {
        if (ModelState.IsValid)
        {
            var data = await _authService.Registeration(model, "user");
            return data.Item1 == 1 ? Ok(data.Item2) : BadRequest(data.Item2);
        }
        return BadRequest(model);
    }

    [HttpGet]
    [Route("{userName}/{password}")]
    public async Task<IActionResult> Login(string userName, string password)
    {
        var data = await _authService.Login(new LoginModel
        {
            Username = userName,
            Password = password
        });
        return data.Item1 == 1 ? Ok(new ApiOkResponse(data.Item2)) : BadRequest(new ApiBadResponse(data.Item2));
    }
}