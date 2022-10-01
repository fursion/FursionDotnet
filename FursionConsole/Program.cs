// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
var ob = new
{
    name = "test",
    code = -1
};
System.Console.WriteLine(Fursion.Tools.ToJsonString(ob));
var timestamp=Fursion.Tools.GetTimeStamp();