#include "sync.h"

#include <cmark.h>
#include <core-extensions.h>
#include <nan.h>
#include <v8.h>

#include "common.h"
#include "kitchen_sink.h"

NAN_METHOD(cmark::render_html)
{
  const auto markdown = convert_to_string(info[0]);

  v8::Local<v8::Value> option = info[1];
  const auto optionValue = Nan::To<int32_t>(option).FromMaybe(0);

  const auto html = cmark::markdown_to_html(markdown, optionValue);

  set_return_value(info, convert_to_value(html));
}
