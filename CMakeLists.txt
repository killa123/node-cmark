cmake_minimum_required(VERSION 2.8.9)

# prevent ugly developer warnings because version is set directly, not through project()
# it should be redone properly by using VERSION in project() if on CMake 3.x
if(CMAKE_MAJOR_VERSION GREATER 2)
    cmake_policy(SET CMP0048 OLD)
endif()

project(cmark)

include("vendor/cmark/FindAsan.cmake")

set(PROJECT_NAME "cmark")

set(PROJECT_VERSION_MAJOR 0)
set(PROJECT_VERSION_MINOR 27)
set(PROJECT_VERSION_PATCH 1)
set(PROJECT_VERSION_GFM 0)
set(PROJECT_VERSION ${PROJECT_VERSION_MAJOR}.${PROJECT_VERSION_MINOR}.${PROJECT_VERSION_PATCH}.gfm.${PROJECT_VERSION_GFM} )

# CONFIGURE_FILE(${CMAKE_CURRENT_SOURCE_DIR}/vendor/cmark/src/cmark_version.h.in ${CMAKE_CURRENT_BINARY_DIR}/cmark_version.h)

# CONFIGURE_FILE(${CMAKE_CURRENT_SOURCE_DIR}/vendor/cmark/src/config.h.in ${CMAKE_CURRENT_BINARY_DIR}/config.h)

include(GenerateExportHeader)
include(CheckIncludeFile)
include(CheckCSourceCompiles)
include(CheckCSourceRuns)
include(CheckSymbolExists)

CHECK_INCLUDE_FILE(stdbool.h HAVE_STDBOOL_H)

include_directories(
  ${PROJECT_SOURCE_DIR}/vendor/cmark/src
  ${PROJECT_SOURCE_DIR}/vendor/cmark/extensions
  ${CMAKE_JS_INC}
  "node_module/nan"
  "cmake"
)

file(GLOB SOURCE_FILES
"vendor/cmark/src/*.c"
"vendor/cmark/src/*.h"
"vendor/cmark/extensions/*.c"
"vendor/cmark/extensions/*.h"
"src/*.cpp"
"src/*.h")
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES})
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_include_directories(${PROJECT_NAME} PRIVATE ${CMAKE_JS_INC})
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB})
