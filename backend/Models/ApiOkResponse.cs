
using System.Net;
using Microsoft.SqlServer.Server;
namespace backend.Models;

public class ApiOkResponse
{
    public ApiOkResponse(dynamic data)
    {
        Data = data;
    }
    public int StatusCode { get; set; } = (int)HttpStatusCode.OK;
    public dynamic Data { get; set; }
    public string Message { get; set; } = string.Empty;
}

public class ApiBadResponse
{
    public ApiBadResponse(string message)
    {
        Message = message;
    }
    public int StatusCode { get; set; } = (int)HttpStatusCode.OK;
    public dynamic Data { get; set; }
    public string Message { get; set; } = string.Empty;

}