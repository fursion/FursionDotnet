using System.Text.Json;
namespace Fursion
{
    public static class Tools
    {
        public static string ToJsonString(object ob)
        {

            return JsonSerializer.Serialize(ob);
        }
        public static T JsonStrTo<T>(string JsonStr)
        {
            return JsonSerializer.Deserialize<T>(JsonStr);
        }
        public static string GetTimeStamp()
        {
            return new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds().ToString();
        }
        public static DateTimeOffset TimeStampToTime(string TimeStampStr)
        {
            return DateTimeOffset.FromUnixTimeSeconds(long.Parse(TimeStampStr)).ToLocalTime();
        }
    }
}